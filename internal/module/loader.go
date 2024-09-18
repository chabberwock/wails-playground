package module

import (
	"log"
	"net/http"
	"os"
	"path"
	"strings"
)

type Loader struct {
	moduleDir string
	prefix    string
}

func NewLoader(moduleDir, prefix string) *Loader {
	return &Loader{
		moduleDir: moduleDir,
		prefix:    prefix,
	}
}

func (m *Loader) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if !strings.HasPrefix(r.URL.Path, m.prefix) {
		w.WriteHeader(404)
		return
	}
	cleanPath := path.Clean(r.URL.Path)
	bytes, err := os.ReadFile(m.moduleDir + cleanPath)
	if err != nil {
		w.WriteHeader(404)
		return
	}
	if strings.HasSuffix(r.URL.Path, ".js") {
		w.Header().Set("Content-Type", "application/javascript")
	}
	if _, err := w.Write(bytes); err != nil {
		log.Printf("failed to send file %s: %s", r.URL.Path, err)
	}
}

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

type JSModule struct {
	Path string `json:"path"`
	Name string `json:"title"`
}

func NewLoader(moduleDir, prefix string) *Loader {
	return &Loader{
		moduleDir: moduleDir,
		prefix:    prefix,
	}
}

func (m *Loader) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	log.Printf("requested: %s", r.URL.RequestURI())
	if !strings.HasPrefix(r.URL.RequestURI(), m.prefix) {
		w.WriteHeader(404)
		return
	}
	parts := strings.Split(path.Clean(r.URL.RequestURI()), "?")
	cleanPath := strings.TrimPrefix(parts[0], "/modules")
	bytes, err := os.ReadFile(m.moduleDir + cleanPath)
	if err != nil {
		log.Printf("failed to load asset: %s", m.moduleDir+cleanPath)
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

func (m *Loader) List() ([]JSModule, error) {
	entries, err := os.ReadDir(m.moduleDir)
	log.Printf("items %s", m.moduleDir)
	var response []JSModule
	if err != nil {
		return nil, err
	}
	for _, jsm := range entries {
		if jsm.IsDir() {
			response = append(response, JSModule{
				Path: m.prefix + "/" + jsm.Name() + "/main.js",
				Name: jsm.Name(),
			})
		}
	}
	return response, nil
}

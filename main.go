package main

import (
	"embed"
	"log"
	"net/http"
	"wails-playground/internal/myapp"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

type MyLoader struct {
}

func (m *MyLoader) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	log.Println("handling " + r.URL.Path)
	w.Write([]byte("//hello world I am " + r.URL.Path))
}

func main() {

	// Create an instance of the app structure
	app := myapp.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "wails-playground",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets:  assets,
			Handler: new(MyLoader),
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.Startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}

}

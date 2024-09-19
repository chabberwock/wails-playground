package main

import (
	"embed"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"wails-playground/internal/module"
	"wails-playground/internal/myapp"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	exe, err := os.Executable()
	if err != nil {
		fmt.Println(err)
		return
	}

	modPath, err := filepath.Abs(path.Dir(exe) + "/modules")
	if err != nil {
		fmt.Printf("failed to resolve module path: %s", err)
		os.Exit(1)
	}
	loader := module.NewLoader(modPath, "/modules")

	app := myapp.NewApp(loader)

	// Create application with options
	errWails := wails.Run(&options.App{
		Title:             "wails-playground",
		Width:             1024,
		Height:            768,
		HideWindowOnClose: true,
		StartHidden:       true,
		AssetServer: &assetserver.Options{
			Assets:  assets,
			Handler: loader,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.Startup,
		Bind: []interface{}{
			app,
		},
	})

	if errWails != nil {
		println("Error:", err.Error())
	}

}

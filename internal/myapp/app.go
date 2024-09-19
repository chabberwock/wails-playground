package myapp

import (
	"context"
	"fmt"
	"fyne.io/systray"
	"fyne.io/systray/example/icon"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"log"
	"wails-playground/internal/module"
)

// App struct
type App struct {
	ctx    context.Context
	loader *module.Loader
}

// NewApp creates a new App application struct
func NewApp(loader *module.Loader) *App {
	return &App{
		loader: loader,
	}
}

// Startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
	go systray.Run(onReady, onExit)
	go func() {
		for {
			<-systray.TrayOpenedCh
			runtime.WindowShow(ctx)
		}
	}()
}

func onExit() {

}

func onReady() {
	systray.SetIcon(icon.Data)
	systray.SetTitle("Awesome App")
	systray.SetTooltip("Pretty awesome")
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

type JSModuleResponse struct {
	Path  string `json:"path"`
	Title string `json:"title"`
}

func (a *App) Modules() []module.JSModule {
	list, err := a.loader.List()
	if err != nil {
		log.Printf("failed to list modules: %s", err)
		return nil
	}
	return list
}

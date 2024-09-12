package myapp

import (
	"context"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"log"
	"time"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// Startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) MyFunc(name string) string {
	log.Printf("user entered name: %s", name)
	return "he is " + name
}

func (a *App) MyChan(name string) {
	go func() {
		for {
			log.Println("writing to channel")
			runtime.EventsEmit(a.ctx, "myevent", []string{"data1", "data2", name})
			time.Sleep(5 * time.Second)

		}
	}()

}

func (a *App) SuperFunc2() string {
	return "hi I am superfunc"
}

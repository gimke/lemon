package main

import (
	"github.com/gimke/cart"
)

func main() {
	c := cart.Default()
	c.Use("/home/*file", cart.File("./static/dist/index.html"))
	c.Use("/static/*file", cart.Static("./static", false))
	c.Run(":8081")
}
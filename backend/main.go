package main

import (
	"website/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.BlogRoute(r)

	r.Run("localhost:8000")
}

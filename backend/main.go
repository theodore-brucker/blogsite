package main

import (
	"website/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(cors.Default())

	blogRoutes := r.Group("/api")
	routes.BlogRoute(blogRoutes)

	r.Run("localhost:8000")
}

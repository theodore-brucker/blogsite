package routes

import (
	"website/controllers"

	"github.com/gin-gonic/gin"
)

func BlogRoute(router *gin.Engine) {
	router.POST("/newentry", controllers.CreateBlog)
	router.GET("/entries", controllers.GetAllBlogs)
}

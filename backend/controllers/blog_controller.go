package controllers

import (
	"context"
	"net/http"
	"time"
	"website/configs"
	"website/models"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var blogCollection *mongo.Collection = configs.GetCollection("blogs")

func init() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	blogCollection.Drop(ctx)
}

// POST /newentry
func CreateBlog(c *gin.Context) {
	var blog models.Blog
	if err := c.Bind(&blog); err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err := blogCollection.InsertOne(ctx, blog)
	if err != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
		return
	}

	c.Status(http.StatusCreated)
}

// GET /entries
func GetAllBlogs(c *gin.Context) {
	var blogs []models.Blog

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	results, err := blogCollection.Find(ctx, bson.M{})
	if err != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
		return
	}
	defer results.Close(ctx)

	for results.Next(ctx) {
		var blog models.Blog
		if err = results.Decode(&blog); err != nil {
			c.AbortWithStatus(http.StatusInternalServerError)
			return
		}
		blogs = append(blogs, blog)
	}

	c.IndentedJSON(http.StatusOK, blogs)
}

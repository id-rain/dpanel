package logic

import (
	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/service/docker"
	"github.com/golang-jwt/jwt/v5"
	"github.com/we7coreteam/w7-rangine-go-support/src/facade"
)

type UserInfo struct {
	UserId       int32  `json:"userId"`
	Username     string `json:"username"`
	RoleIdentity string `json:"roleIdentity"`
	jwt.RegisteredClaims
}

type User struct {
}

func (self User) GetJwtSecret() []byte {
	return []byte(docker.BuilderAuthor + facade.GetConfig().GetString("app.name"))
}

func (self User) GetMd5Password(password string, key string) string {
	return function.GetMd5(password + key)
}

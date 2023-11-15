package model

import (
	"time"

	"github.com/asaskevich/govalidator"
	uuid "github.com/satori/go.uuid"
)

type Teacher struct {
	Base     `valid:"required"`
	Name     string `json:"name" valid:"notnull"`
	Birthday time.Time `json:"birthday" valid:"notnull"`
	Email    string `json:"email" valid:"-"`
	Phone    string `json:"phone" valid:"-"`
	Branch  *Branch `valid:"-"`
}

func (teacher *Teacher) isValid() error {
	_, err := govalidator.ValidateStruct(teacher)
	if err != nil {
		return err
	}
	return nil
}


func newTeacher(branch *Branch, name string, birthday time.Time, email string, phone string) (*Teacher, error) {
	teacher := Teacher{
		Name:    name,
		Birthday: birthday,
		Email:   email,
		Phone:   phone,
		Branch:  branch,
	}

	teacher.ID = uuid.NewV4().String()
	teacher.CreatedAt = time.Now()

	err := teacher.isValid()
	if err != nil {
		return nil, err
	}

	return &teacher, nil
}
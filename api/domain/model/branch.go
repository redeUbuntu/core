package model

import (
	"github.com/asaskevich/govalidator"
	uuid "github.com/satori/go.uuid"
	"time"
)

type Branch struct {
	Base     `valid:"required"`
	Name     string `json:"name" valid:"notnull"`
	Location string `json:"location" valid:"notnull"`
	Phone    string `json:"phone" valid:"-"`
	Email    string `json:"email" valid:"-"`
}

func (branch *Branch) isValid() error {
	_, err := govalidator.ValidateStruct(branch)
	if err != nil {
		return err
	}
	return nil
}

func newBranch(name string, location string, phone string, email string) (*Branch, error) {
	branch := Branch{
		Name:     name,
		Location: location,
		Phone:    phone,
		Email:    email,
	}

	branch.ID = uuid.NewV4().String()
	branch.CreatedAt = time.Now()

	err := branch.isValid()
	if err != nil {
		return nil, err
	}

	return &branch, nil
}

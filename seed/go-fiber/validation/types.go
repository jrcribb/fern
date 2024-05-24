// This file was auto-generated by Fern from our API Definition.

package validation

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/validation/fern/core"
)

type CreateRequest struct {
	Decimal float64 `json:"decimal" url:"-"`
	Even    int     `json:"even" url:"-"`
	Name    string  `json:"name" url:"-"`
}

type GetRequest struct {
	Decimal float64 `query:"decimal"`
	Even    int     `query:"even"`
	Name    string  `query:"name"`
}

type Double = float64

type LargeInteger = int

type Sentence = string

type SmallInteger = int

// Defines properties with default values and validation rules.
type Type struct {
	Decimal float64 `json:"decimal" url:"decimal"`
	Even    int     `json:"even" url:"even"`
	Name    string  `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (t *Type) GetExtraProperties() map[string]interface{} {
	return t.extraProperties
}

func (t *Type) UnmarshalJSON(data []byte) error {
	type unmarshaler Type
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*t = Type(value)

	extraProperties, err := core.ExtractExtraProperties(data, *t)
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties

	return nil
}

func (t *Type) String() string {
	if value, err := core.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}

type Word = string
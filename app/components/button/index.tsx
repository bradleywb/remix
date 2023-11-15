import React from 'react'

export default function Button({ children, ...attributes }) {
	return <button {...attributes}>{children}</button>
}

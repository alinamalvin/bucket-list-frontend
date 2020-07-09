import React from 'react'

const Countries = (props) => {
    return (
        <div>
            {props.countries && props.countries.map(country =>
                <li key={country.id}>{country.name}</li>
            )}
        </div>
    )
}

export default Countries

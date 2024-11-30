import * as React from 'react';
import { useState } from 'react'

const Filter = ({ filters, handleFilterSelected }: { filters: any, handleFilterSelected: any }) => {

    const [selectedFilter, setSelectedFilter] = useState('')

    const handleSelectedFilter = (e: any) => {
        setSelectedFilter(e.target.value)
        handleFilterSelected([e.target.name, e.target.value])
    }

    return (
        <div className="filter">
            <span>Filtrar Por:</span><br />
            {Object.entries(filters).map(([key, value]: [string, any]) =>
                <div key={key}>
                    <span>{key}: </span>
                    <select name={key} value={selectedFilter} onChange={handleSelectedFilter}>
                        {
                            value.map((el: string, i: number) =>
                                <option value={el} key={i}>{el}</option>
                            )
                        }
                    </select>
                </div>
            )}
        </div>
    )
}

export default Filter
import React from 'react'

export default function myelement(type) {

    switch (type) {
        case 'string':
          return (
            <input
              type="text"
              value={f[fieldKey] || ''}
              onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            />
          );
        case 'integer':
          return (
            <input
              type="number"
              value={f[fieldKey] || ''}
              onChange={(e) => handleInputChange(fieldKey, e.target.valueAsNumber)}
            />
          );
        case 'choice':
          return (
            <select
              value={f[fieldKey] || ''}
              onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            >
              {fieldData.choices.map((choice) => (
                <option key={choice.value} value={choice.value}>
                  {choice.display_name}
                </option>
              ))}
            </select>
          );
        case 'boolean':
          return (
            <input
              type="checkbox"
              checked={f[fieldKey] || false}
              onChange={(e) => handleInputChange(fieldKey, e.target.checked)}
            />
          );
        // Add more cases for other field types as needed
        default:
          return null;




  return (
    <div>myelement</div>
  )
}

}
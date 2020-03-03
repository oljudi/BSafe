const {Schema, model} = require('mongoose')

const placeSchema = new Schema(
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            cordinates: Array
        },
        properties: {
            name: String
        } 
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Place', placeSchema)
import { v4 as uuidv4 } from 'uuid';

function ggVenues(){
    return[
        {
          id: uuidv4(),
          name: 'Bishop Gate',
          lat: 52.41264511197488,
          long: -1.5107004006676523,
          phone: '070 000 000',
          email: 'homeowner@gmail.com'
        },
        {
            id: uuidv4(),
            name: 'Holy Ghost Zone',
            lat: 52.413981415502,
          long:  -1.4981275762323547,
            phone: '080 000 000',
            email: 'homeowner@gmail.com'
          }
    ]
}

export default ggVenues
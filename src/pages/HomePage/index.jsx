
import { useEffect, useState } from 'react';

import './style.css';

export const HomePage = () => {
  const [dateTime, setDateTime] = useState('')
  const [timeZone, setTimeZone] = useState('Europe/Prague')  

  
  useEffect(() => {
    const fetchTime = async () => {
     
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/${timeZone}`);
      const data = await response.json();
      setDateTime(data.datetime);
    };

    fetchTime();
  }, [timeZone]);



return(
<> 
V {timeZone} je:  
{dateTime}

<form onChange={(e) => {setTimeZone(e.target.value)}}
value={timeZone}>
<select>
  <option value="America/New_York">New York</option>
  <option value="Europe/London">Londýn</option>
  <option value="Europe/Moscow">Moskva</option>
  <option value="Europe/Prague">Praha</option>
  <option value="Asia/Hong_Kong">Hong Kong</option>
  <option value="Asia/Jerusalem">Jeruzalém</option>
</select>
</form>
</>

)}

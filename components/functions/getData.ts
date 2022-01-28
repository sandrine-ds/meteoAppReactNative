import axios from "axios";
import { TData } from "../types";

export async function getData(
  request: string,
  setData: React.Dispatch<React.SetStateAction<TData | undefined>>
) {
  await axios(request)
    .then((res) => {
      setData({
        city: res.data.location.name,
        comment: res.data.current.weather_descriptions[0],
        temperature: res.data.current.temperature,
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

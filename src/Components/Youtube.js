
import axios from "axios";
const KEY = "AIzaSyAZ0mMNK2qQSU--bWcYtICAT2Qq2AoLHoQ";
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});



import './App.css';
import Search from './Components/Search';
import React from 'react';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetails';
import youtubeApi from './Components/Youtube';
import axios from 'axios';
import "../src/styles.css";
import Videoplayer from './Components/VideoPlayer';
class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null
  };
  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
    console.log(this.state);
  };
 handleVideoSelect=(video)=>{
   this.setState({selectedVideoId:video})
 };
 render(){
   return(
     <div className='App'>
       <Search onSearch={this.onSearch}></Search>
       <Videoplayer videoId={this.state.selectedVideoId} />
       <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        />
     </div>
   );
 }
}

export default App;

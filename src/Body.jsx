import React, {Component} from 'react';
import Autocomplete from "./Autocomplete";
import Map from "./Map";
import './body.css';
import distance from "./distance";
import nodes from "./nodelist";
import searchHelper from "./algo";

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            start: null,
            stop: null,
            showMap: false
        }
        this.handleMap = this.handleMap.bind(this);
        this.updateStart = this.updateStart.bind(this);
        this.updateStop = this.updateStop.bind(this);
        this.backToSearch = this.backToSearch.bind(this);
    }

    handleMap(){
        // hello("courtland");
        const {start, stop} = this.state;
        //pass the start, stop and parse the output.
        if(start == null || stop == null){
            alert('Please enter both start and stop')
            return;
        }
        //Assume this is the parsed output  
        var coords = searchHelper(start,stop,nodes);
        var sum = 0;
        for(var i=0;i < (coords.length)-1; i++){
            var item = coords[i]
            var item2 = coords[i+1]
            sum = sum + distance(item.lat,item.lng,item2.lat,item2.lng);
        } 
        this.setState({
            showMap: true,
            coords,
            sum: sum.toFixed(4),
            len: coords.length
        })
    }

    backToSearch(){
        this.setState({
            showMap: false,
            start: null,
            stop:null
        });
    }

    updateStart(val){
        this.setState({
            start: val
        });
    }
    updateStop(val){
        this.setState({
            stop: val
        });
    }

    render(){
        var suggestions = ["LSU Art Building",
        "Animal and Food Science Lab",
        "Patrick F Taylor Hall",
        "Business Education Complex",
        "Reilly Theatre",
        "Department of Chemistry",
        "LSU Agcenter",
        "Middleton Library",
        "LSU Museum of Natural Science",
        "Prescott Hall",
        "William C Stubbs Hall",
        "Audubon Hall",
        "College of Agriculture",
        "Robert Reich School of Landscape Architcture",
        "Howe Russell Geosciences Complex",
        "Department of Physics and Astronomy",
        "Coates Hall",
        "Himes Hall",
        "Bell Tower",
        "Lockett Hall",
        "Tureaud Hall",
        "LSU Ag Center Dairy Store",
        "Hatcher Hall",
        "LSU College of Humanities and Social Sciences",
        "Manship School of Mass Communication",
        "Johnston Hall",
        "College of the Coast and Environment",
        "Allen Hall",
        "Nicholson Hall",
        "Department of Geography and Anthropology",
        "School of Human Ecology"];
        const {showMap,coords,sum, start, stop,len} = this.state;
        const search = (<div className="body">
                            <div className="body-container">
                                <div className="start-div"><Autocomplete valChange={this.updateStart} ptext={"Start Location"} suggestions={suggestions} /></div>
                                <div className="stop-div"><Autocomplete valChange={this.updateStop} ptext={"Stop Location"} suggestions={suggestions} /></div>
                                <div><button className="button" onClick={this.handleMap}>Map</button></div>
                            </div>
                        </div>)
        const body = showMap ? 
        <div className="map">
            <div className="metadata">
                <button className="button" onClick={this.backToSearch}>Search</button> 
                <p>Start = {start} </p> <p> Stop = {stop} </p> <p> Distance = {sum} Miles</p> <p>Nodes: {len}</p>
            </div>
            <Map path={coords} nodes={nodes}/>
        </div> 
        : search;
        return(
            <div>{body}</div>
        );
    }
}

export default Body;
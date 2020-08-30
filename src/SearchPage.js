import React from "react";
import { Button } from "@material-ui/core";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
function SearchPage() {
  return (
    <div>
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        location="Lorry-lès-Metz, Alsace-Champagne-Ardenne-Lorraine, France"
        title="Cottage 'le PicVert' + park 4000 m²"
        description="Villa close to Metz (4km, 15min). City-Bus stop at 200m. "
        star="4.85"
        price="€55/ night"
        total="€110 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        location="Lorry-lès-Metz, Alsace-Champagne-Ardenne-Lorraine, France"
        title="Cottage 'le PicVert' + park 4000 m²"
        description="Villa close to Metz (4km, 15min). City-Bus stop at 200m. "
        star="4.85"
        price="£95/ night"
        total="£190 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        location="Lorry-lès-Metz, Alsace-Champagne-Ardenne-Lorraine, France"
        title="Cottage 'le PicVert' + park 4000 m²"
        description="Villa close to Metz (4km, 15min). City-Bus stop at 200m. "
        star="4.85"
        price="$120/ night"
        total="$240 total"
      />
    </div>
  );
}

export default SearchPage;

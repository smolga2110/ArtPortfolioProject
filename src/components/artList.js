import React, { useRef, useState } from "react";
import ArtItem from './artItem';
import './styles/artList.css'

function ArtList(){
    const [arts, setArts] = useState([]);

    const [newArtTitle, setNewArtTitle] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newArtRoute, setNewArtRoute] = useState(null);

    const inputFile = useRef(null);

    const onImageChange = (event) => {

        if (event.target.files && event.target.files[0]) {
            setNewArtRoute(URL.createObjectURL(event.target.files[0]))
        }

    }

    const addArt = () => {
        const newArt = {
            id: Date.now(),
            route: newArtRoute,
            title: newArtTitle,
            author: newAuthor
        }
        
        setArts([...arts, newArt]);
        console.log(arts);
        setNewArtTitle('');
        setNewArtRoute(null);
        setNewAuthor('');

        let vis = document.getElementById('visib');
        vis.setAttribute('hidden', 'true')

    }

    return(
        <div>
            <div className="upload_overlay" id="visib">
                <div className="upload_container">
                    <input
                        type="text"
                        value={newArtTitle}
                        onChange={(e) => setNewArtTitle(e.target.value)}
                        placeholder="Название арта"
                    />
                    <input
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="Автор"
                    />
                    <label for="file">Browse...</label>
                    <input
                        type="file"
                        onChange={onImageChange}
                        id="file"
                        ref={inputFile}
                    />

                    <img src={newArtRoute} alt=""></img>

                    {newArtRoute === null ? (<button id="upload_button" disabled='true'>Выберите Арт</button>) : (<button id="upload_button" onClick={addArt}>Загрузить</button>)}

                </div>
            </div>
            

            <div className="arts_container">
                {arts.length === 0 ? (
                <p>Артов нет на данный момент</p>
            ) : (
                arts.map((art) => (
                    <ArtItem
                        key={art.id}
                        art={art}
                    />
                    ))
                )}
            </div>
        </div>
    );
}

export default ArtList;
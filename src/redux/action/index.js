export const SET_ALBUM = "SET_ALBUM";
export const SET_SINGLE_ALBUM = "SET_SINGLE_ALBUM";
export const SET_ARTIST = " SET_ARTIST";
export const SET_SEARCH = " SET_SEARCH";
export const SET_AUDIO = " SET_AUDIO";
export const SET_COUNTER = " SET_COUNTER";
export const ADD_COUNTER = " ADD_COUNTER";
export const SET_PLAY = " SET_PLAY";

export const setAlbum = (data) => ({ type: SET_ALBUM, payload: data });
export const setSingleAlbum = (data) => ({ type: SET_SINGLE_ALBUM, payload: data });
export const setArtist = (data) => ({ type: SET_ARTIST, payload: data });
export const setSearch = (data) => ({ type: SET_SEARCH, payload: data });
export const setAudio = (data) => ({ type: SET_AUDIO, payload: data });
export const setCounter = () => ({ type: SET_COUNTER });
export const addCounter = (data) => ({ type: ADD_COUNTER, payload: data });
export const setPlay = (data) => ({ type: SET_PLAY, payload: data });

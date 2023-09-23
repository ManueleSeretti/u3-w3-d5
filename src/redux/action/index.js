export const SET_ALBUM = "SET_ALBUM";
export const SET_SINGLE_ALBUM = "SET_SINGLE_ALBUM";
export const SET_ARTIST = " SET_ARTIST";
export const SET_SEARCH = " SET_SEARCH";

export const setAlbum = (data) => ({ type: SET_ALBUM, payload: data });
export const setSingleAlbum = (data) => ({ type: SET_SINGLE_ALBUM, payload: data });
export const setArtist = (data) => ({ type: SET_ARTIST, payload: data });
export const setSearch = (data) => ({ type: SET_SEARCH, payload: data });

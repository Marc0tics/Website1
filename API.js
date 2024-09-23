// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCqGiyFvLPObwDHTDasZGxChgXROLXQ3KewCellZ9Sj6M1hGQnY6JYu8aJkyReqcKTOp4_FutDpH--Cc4VBfzGQo8jE4dl2_SiAnjTVzXrNrRJmmIAPWqUnDBYUqsPsItOcxgFkAh974_5X5OEfQVWKTrsGHBbV3EJh5kqw-fP0XH-mFba138YOlpCDM2EtB9N1oBR8W8j4Uicnx9a3jWZB2BW47C2mK0arxoD2K2TFKS1uhO0VU9VzuUIkYJ-QqbNECp06562wVOatzTD1ujzU7SHgMzHS';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items;
}

const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({name, artists}) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);



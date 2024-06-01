#!/bin/bash

Path="../../../.env"

source "$Path"
if [ ! -e token.ts ]; then
	touch token.ts
fi

echo "
interface AuthData {
  access_token: string;
  token_type: string;
  expires_in: number;
}
export const auth: AuthData[] = [

">token.ts

curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=$SPOTIFY_CLIENT_ID&client_secret=$SPOTIFY_CLIENT_SECRET">>token.ts
echo "]">>token.ts



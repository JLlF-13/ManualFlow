INSERT INTO manual_crud_programtype (id, name) VALUES 
(1, 'Office Software'),
(2, 'Development Tools'),
(3, 'Graphics & Design'),
(4, 'Media Players'),
(5, 'Security Software'),
(6, 'Gaming Platforms');

INSERT INTO manual_crud_program (id, name, logo, creation_year, description, manual_win, manual_mac, manual_linux, official_link, program_type_id) VALUES 
(1, 'Spotify', 'program_logos/spotify.svg', 2008, 'Music streaming application.',
'1. Download the installer file. 
2. Open the file and follow setup instructions. 
3. Accept terms and click Install. 
4. Wait for installation to complete. 
5. Open Spotify and log in.',

'1. Open Finder and locate the installer file.
2. Double-click to start the setup.
3. Drag Spotify into Applications.
4. Launch the app and sign in.',

'1. Open Terminal and update repositories: sudo apt update. 
2. Install Spotify: sudo apt install spotify-client. 
3. Run Spotify from the Applications menu.',

NULL, (SELECT id FROM manual_crud_programtype WHERE name = 'Media Players'));

INSERT INTO manual_crud_program (id, name, logo, creation_year, description, manual_win, manual_mac, manual_linux, official_link, program_type_id) VALUES 
(2, 'Steam', 'program_logos/steam.svg', 2003, 'Digital distribution platform for video games and software.',

'1. Download the Steam installer from the official website.
2. Open the installer file and follow the setup instructions.
3. Sign in or create a Steam account.
4. Browse the store and install games.
5. Start playing your favorite games.',

NULL, NULL,

'https://store.steampowered.com/', (SELECT id FROM manual_crud_programtype WHERE name = 'Gaming Platforms'));

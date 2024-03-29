# POC React-Native Birding list app

This is a simple React-Native app that I created to showcase some React-Native code. 

It is a simple birding list app that allows you to create a 'Walk' and add/remove birds to that walk.

This example was developed on a Mac with an iOS simulator. 
While everything should work on Android, I have not tested it and did not complete the vector icons setup for that platform. 

## Architecture

The app is built using React-Native and uses Redux for state management. It uses the following libraries:
- moment (for more convenient date formatting)
- react-native-vector-icons (for icons)
- react-navigation (for navigation)
- redux (for state management)
- gorhom/bottom-sheet (for the bottom sheets)
- react-native-uuid (for generating UUIDs)


## Features

### Walks

Keep a list of walks that you have been on. You can add a new walk and open existing walks.

### Bird lists

Keep a list of birds that you have seen on a walk. You can add a new bird and remove birds from the list.
Each walk has a list of birds.

## TODO

- verify content fits bottomsheet on smaller devices
- add persistent storage (Realm? SQL?)
- tests 

## Wishlist

- remove a walk (and all the birds on that walk)
- edit walk name
- edit bird entry
- expand bird entry to include more details (description, note, number of birds, ...)
- take/add photo and add it to a birdspot
- add gps location to bird spot (and show it on a map)
- autofill bird names based on previous entries
- export lists to csv
- cloud backups 
- integrate with waarnemeningen.be
- firebase crash reporting
- firebase performance monitoring
- firebase analytics
- search/filter walks
- search/filter birds
- favorite birds/walks

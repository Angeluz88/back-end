const apiControllers = {
      
    getEpisodies: async (req, res) => { 
      const episodies = await res.redirect('https://rickandmortyapi.com/api/episode').results;
      res.json(episodies)
    },
  
    getCharacters: async (req, res) => { 
     const characters = await res.redirect('https://rickandmortyapi.com/api/character');
     res.json(characters);
      
    },

    
}
  module.exports = apiControllers;
  
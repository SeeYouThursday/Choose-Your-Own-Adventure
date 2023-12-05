const withAuth = require('../../utils/auth');
const router = require('express').Router();
const { StoryLine, User, Story } = require('../../models');

//Create new story-line
router.post('/start', withAuth, async (req, res) => {
  const title = req.body.title;
  const story_line = req.body.story_line;
  try {
    const storyData = await StoryLine.create({
      title,
      story_line,
      user_id: req.session.user_id,
    });

    res.status(200).json(storyData);
  } catch (error) {
    res.status(400).json(error);
  }
});

//TODO: Update story-line as choices are made
router.put('/update/:id', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    await StoryLine.update(
      {
        ...req.body,
        user_id: req.session.user_id,
      },
      {
        where: { id: req.params.id },
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete story-line if user wants to delete from their dashboard

//Delete Post
router.delete('delete/:id', withAuth, async (req, res) => {
  try {
    const storyData = await StoryLine.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No Story found with this id!' });
      return;
    } else {
      res.status(200).json(storyData);
    }
  } catch {
    res.status(500).json(err);
  }
  console.log(`
=====================================================================
********************** STORY LINE WAS REMOVED ***********************
=====================================================================
              llllllllllllllllllllllllllllllllllllll                      
               llllllllllllllllllllllllllllllllllll                       
                  llllllllllllllllllllllllllllllll                        
                    lllllllllllllllllllllllllllll                          
                       lllllllllllllllllllllllll                          
                          lllllllllllllllllllll                             
                             lllllllllllllllll                              
                               llllllllllllll                               
                                llllllllllll                                
                               llllllllllll                                 
                              llllllllllll                                  
                             llllllllllll                                   
                            llllllllllll                                    
                           llllllllllll                                     
                           lllllllllll                                      
                          llllllllllll                                      
                    '     llllllllllll      '                        
                      *     llllllllllll  *   *                            
              '    *    *     llllllllllll   *  *   '                      
                      *   *     llllllllll  *                              
                      '    *   * lllllllll *   *   '                        
                   '    '     *  llllllll   *   '_____                      
                         ; ; ; * lllllll  * /  /:''''':                    
                       . ' ' ;  llllll  / / / /  :''''':                    
                     ; ' ; ' ' llllll / / / / |[] | [] |
  `);
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const storyData = await StoryLine.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
          exclude: ['password'],
        },
        {
          model: Story,
          attributes: ['id'],
        },
      ],
    });

    // const storyline = storyData.get({ plain: true });
    res.json(storyData);
    console.log(`
=====================================================================
********************* VIEWING STORYLINE BY ID ***********************
=====================================================================
                      '
                    .      '      .
                .    .     :     .      .
                 '.        ______       .'
                   '  _.-"`      `"-._ '
                    .'                '.
             ''--. /                    : .--''
                  /                      :
                 ;                        ;
            - -- |                        | -- -
                 |     _.                 |
                 ;    /__'.   ,_          ;
             .-'  :   |= |;._.}{__       /  '-.
                _.-""-|.' # '. `  `.-"{}<._
                       /      l     l  x   '"
                 ----/         l_.-'|--X----
                 -=_ |         |    |- X.  =_
                - __ |_________|_.-'|_X-X##
                jgs ''-._|_|;:;_.-'' '::.  '"-
                  .:;.      .:.   ::.     '::.
    `); 
  } catch (err) {
    console.log(err);   
    res.status(500).json(err);
  }
});

module.exports = router;

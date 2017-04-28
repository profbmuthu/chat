// Code example for basic greeting
    const InitClient = require('initai-node')

    // Code example for basic greeting
    module.exports = function runLogic(eventData) {
      return new Promise((resolve) => {
        const client = InitClient.create(eventData, {succeed: resolve})

        // Create a new 'step' function to handle a 'greeting' intent
        const handleGreeting = client.createStep({
          satisfied() { return false },

           
          prompt() {
            // Tell the system to respond with a saved 'greeting' response
            // This is generated from saved messages with 'greeting' intents
            client.addResponse('greeting')
            client.done()
          }
        })

        const handleCourselist = client.createStep({
            satisfied() {return false},
            prompt(){
                client.addResponse('courselist')
                client.done()
            }
        })

         const handleCoursedelivery = client.createStep({
            satisfied() {return false},
            prompt(){
                client.addResponse('coursedelivery')
                client.done()
            }
        })
         
         const handleCourseft = client.createStep({
            satisfied() {return false},
            prompt(){
                client.addResponse('courseft')
                client.done()
            }
        })


        // Create a new 'step' function to handle a 'goodbye' intent
        const handleGoodbye = client.createStep({
          satisfied() { return false },

          prompt() {
            // Tell the system to respond with a saved 'goodbye' response
            // This is generated from saved messages with 'goodbye' intents
            client.addResponse('goodbye')
            client.done()
          }
        })

        client.runFlow({
          // create a stream object with a reference to our step functions
          streams: {
            goodbye: handleGoodbye,
            greeting: handleGreeting,
            courselist: handleCourselist,
            coursedelivery: handleCoursedelivery,
            courseft: handleCourseft
              
          },
          // Assign stream references to our classifications (intents)
          classifications: {
            goodbye: 'goodbye',
            greeting: 'greeting',
            courseft:  'course Fast Track'
          },
        })
      })
    }

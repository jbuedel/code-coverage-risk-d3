fs = require 'fs'
_ = require 'underscore'

users = [3,5,6]

class Graph
  constructor: (text) ->
    states = text.split '\n'
    @states = {}
    @s = []
    @taken = {}

    _.each states, (state) =>
      [current, contigs...] = state.split ','
      @states[current] = contigs
      @s.push current

  randomstate: () ->
    item = Math.floor ( Math.random() * 1000 ) % 48
    for state,i in Object.keys(@states) when i == item
      console.log 'random', state
      return state


  map: (state, users, upos) ->
    #console.log users, upos, @taken
    if users.length == upos
      return
    user = users[upos]
    if user == 0
      return @map @randomstate(), users, (upos+1)
    else
      if !@taken[state]
        @taken[state] = upos
        users[upos] = users[upos] - 1
  
      console.log state, @states[state]
      for st in @states[state] when !@taken[st]
        return @map st, users, upos

      return @map @randomstate(), users, upos
  print: () ->
    console.log @taken

fs.readFile 'states.txt', 'utf8', (err, data) ->
  g = new Graph data
  g.map 'AL', users, 0
  g.print()
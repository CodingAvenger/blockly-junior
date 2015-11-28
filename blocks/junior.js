Blockly.Blocks['green_flag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img/jr_green_flag.png", 32, 32, "green_flag"));
    this.setNextStatement(true, "JUNIOR");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img/jr_arrow_right.png", 32, 32, "right"));
    this.setPreviousStatement(true, "JUNIOR");
    this.setNextStatement(true, "JUNIOR");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img/jr_arrow_left.png", 32, 32, "left"));
    this.setPreviousStatement(true, "JUNIOR");
    this.setNextStatement(true, "JUNIOR");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img//jr_arrow_up.png", 32, 32, "up"));
    this.setPreviousStatement(true, "JUNIOR");
    this.setNextStatement(true, "JUNIOR");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img/jr_arrow_down.png", 32, 32, "down"));
    this.setPreviousStatement(true, "JUNIOR");
    this.setNextStatement(true, "JUNIOR");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img/jr_turn_right.png", 32, 32, "turn_right"));
    this.setPreviousStatement(true, "JUNIOR");
    this.setNextStatement(true, "JUNIOR");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img/jr_turn_left.png", 32, 32, "turn_left"));
    this.setPreviousStatement(true, "JUNIOR");
    this.setNextStatement(true, "JUNIOR");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../img/jr_empty.png", 32, 32, "right"));
    this.setPreviousStatement(true, "JUNIOR");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
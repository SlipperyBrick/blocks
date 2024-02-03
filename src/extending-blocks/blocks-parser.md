Discuss the design/architecture of the blocks preprocessor.

Demonstrate in a diagram the set up of the preprocessor in terms of:

- blocks_preprocessor.py <- where the parser is created and the parse function is invoked
- blocks_parser.py <- the class blueprint of the blocks parser, this calls the methods which do the "work" of parsing the blocks markdown/book
- blocks_factory.py <- the factory design pattern which polymorphically selects the correct component class
- blocks_components.py <- class implementations of each component which all MUST implement their own "create_component()" method
- blocks_utilities.py <- utility/helper functions which are used by both the parser class, and component classes
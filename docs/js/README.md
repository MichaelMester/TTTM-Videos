# JavaScript Architecture

This directory contains modular JavaScript files organized by responsibility.

## File Structure

```
js/
├── config.js      - Firebase configuration and constants
├── utils.js       - Utility functions (escaping, date formatting)
├── storage.js     - LocalStorage management
├── api.js         - Firebase API calls
├── data.js        - Data extraction and processing
├── filters.js     - Filter state and logic
├── ui.js          - UI rendering functions
└── main.js        - Initialization and event handlers
```

## Module Responsibilities

### config.js
- Firebase configuration
- App constants
- Date range definitions

### utils.js
- HTML escaping functions
- Date/time formatting
- YouTube URL parsing
- String utilities

### storage.js
- Watched videos management
- localStorage operations
- State persistence

### api.js
- Firebase Firestore API calls
- Video data fetching
- Error handling

### data.js
- Video grouping by event
- Player/club/event extraction
- Data sorting and filtering
- Date range calculations

### filters.js
- Filter state management
- Filter operations (add, remove, clear)
- Filter application logic

### ui.js
- Render functions for all UI components
- Event group rendering
- Video card rendering
- Sidebar list rendering
- Statistics display

### main.js
- App initialization
- Event listener setup
- Page load coordination
- Global state coordination

## Best Practices

1. **Single Responsibility**: Each module has one clear purpose
2. **No Global Variables**: Use modules to encapsulate state
3. **Clear Dependencies**: Import only what you need
4. **Consistent Naming**: Use descriptive function names
5. **Documentation**: Comment complex logic

## Loading Order

The scripts should be loaded in this order in index.html:
1. config.js
2. utils.js
3. storage.js
4. api.js
5. data.js
6. filters.js
7. ui.js
8. main.js (last - initializes everything)

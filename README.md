# Program 3 2024: Rasterization Final Submit  
**Yuhan Zhao (yzhao66@ncsu.edu, 200559835)**

## Basic Information and Current Achievement:

### Core Functionality:

- **10% Part 2: Render the input triangles, without lighting**
    - The program successfully loads and displays the input triangle sets in a simple 2D projection without any lighting applied.
  
- **25% Part 3: Light the triangles**
    - The lighting has been implemented with proper handling of ambient, diffuse, and specular components. The program supports Phong and Gouraud shading techniques, switchable via keyboard input.

- **20% Part 4: Interactively change view**
    - The user can change the viewpoint in the 3D environment using interactive controls, allowing for translation and rotation around the scene in various directions.
  
- **5% Part 5: Interactively select a model**
    - Models (triangles) can be selected one by one using keyboard inputs, with the selected model highlighted for easier visualization.

- **20% Part 6: Interactively transform the triangles**
    - Selected models can be translated and rotated in the 3D space along different axes, offering full control over position and orientation in the scene.
  
- **10% Part 7: Make it your own (Makeityourown)**
    - Custom triangles are displayed by default and can be hidden or shown by pressing the exclamation mark (`Shift+1`). These custom shapes have their own material properties and are integrated with the scene transformations.
    - **Shift + 1 (Exclamation mark `!`)**: Toggle the visibility of the custom "Make it your own" triangles.
    - **, and .**: Select and highlight the next/previous custom "Make it your own" triangle set.
  
    > **Note:** On my laptop, sometimes it may not recognize ":" if you press the upper ";" key, so please use `Shift + ;` instead of `Shift + :` and `Shift + 1` for the "!" symbol. Thanks for understanding!

## Extra Credit Grading:

- **½% — Smooth shading with vertex normals**  
    - The program implements smooth shading by computing vertex normals, allowing for smoother transitions between faces when lighting is applied.

- **1% — Render ellipsoids**  
    - The program successfully loads and renders ellipsoids. Ellipsoids can be selected and transformed just like the triangles.
    - **Shift + 2 (At symbol `@`)**: Toggle the visibility of ellipsoids in the scene.
    - **Up / Down arrow keys**: Select and highlight the next/previous ellipsoid in the scene.

---
### Shading Mode
- **b**: Switch between Phong and Gouraud shading modes.

### Modify Material Properties
- **n**: Adjust the specular reflection (shininess) of the selected model.
- **1**: Change the ambient material property of the selected model.
- **2**: Change the diffuse material property of the selected model.
- **3**: Change the specular material property of the selected model.


This program implements the core functionality of rasterization with additional user interactivity for manipulating and transforming both built-in and custom shapes, along with extra credit for smooth shading and rendering ellipsoids.

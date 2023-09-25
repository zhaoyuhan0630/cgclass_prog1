# Program 1 2023: Ray casting (Rendering Ellipsoids)
_Harish Rohan Kambhampaty (hkambha@ncsu.edu, 200508783)_

### Special Notes to the evaluators:
- A local copy of `lights.json` is being used since [the one](https://ncsucgclass.github.io/prog1/ellipsoids.json) in the official github repo doesn't match the instructions. (this can be altered in the code by simply changing the URL)
- For the above reason, please use a (live) server to test the code.
- Hard shadows are best visible in _Make It Your Own_, but you will find it in the default ellipsoids if you zoom in.
- While setting the `lookUp` and `gazeDirection`, please ensure that both the vectors are perpendicular (the vectors are normalized internally, so you don't have to worry about that).
- When rendering triangles, the front triangle is darker than others, this is because of the angle of the lighting. Changing the light position will increase visibility.

## Grading
| Grading% | Part          | Description                                                                                                                     | Completed?                                                                                |
|----------|---------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 5        | 0             | partial feedback                                                                                                                | **Yes**                                                                                   |
| 5        | 0.5           | properly turned in assignment                                                                                                   | **Yes**                                                                                   |
| 45       | 1             | ray cast the colored ellipsoids in the input file without lighting                                                              | **Yes**                                                                                   |
| 35       | 2             | color the ellipsoids with Blinn-Phong illumination                                                                              | **Yes**                                                                                   |
| 10       | 3             | make it your own (Rocket from Tintin Comic)                                                                                     | **Yes**                                                                                   |
| -        | Participation | Receive participation credit (outside of this assignment) for posting images of your progress, good or bad, on the class slack! | **Yes**, [link to post](https://cgclass.slack.com/archives/C01E7MQUWQY/p1694056283692389) |
| -        | Extra         | Arbitrarily sized images and viewports                                                                                          | **Yes**                                                                                   |
| -        | Extra         | Support arbitrary viewing setups                                                                                                | **Yes**                                                                                   |
| -        | Extra         | Support off-axis and rectangular projections                                                                                    | **Yes**                                                                                   |
| -        | Extra         | Multiple and arbitrarily located lights                                                                                         | **Yes**                                                                                   |
| -        | Extra         | Detect shadows during ray casting                                                                                               | **Yes**                                                                                   |
| -        | Extra         | Render triangles                                                                                                                | **Yes**                                                                                   |
| -        | Extra         | Voted most interesting                                                                                                          | **Not yet**                                                                               |

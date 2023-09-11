/* classes */
// noinspection SpellCheckingInspection

// Color constructor
class Color {
    constructor(r, g, b, a) {
        try {
            if ((typeof (r) !== "number") || (typeof (g) !== "number") || (typeof (b) !== "number") || (typeof (a) !== "number"))
                throw "color component not a number";
            else if ((r < 0) || (g < 0) || (b < 0) || (a < 0))
                throw "color component less than 0";
            else if ((r > 255) || (g > 255) || (b > 255) || (a > 255))
                throw "color component bigger than 255";
            else {
                this.r = Math.round(r);
                this.g = Math.round(g);
                this.b = Math.round(b);
                this.a = Math.round(a);
            }
        } // end try

        catch (e) {
            console.log(e);
        }
    } // end Color constructor

    // Color change method
    change(r, g, b, a) {
        try {
            if ((typeof (r) !== "number") || (typeof (g) !== "number") || (typeof (b) !== "number") || (typeof (a) !== "number"))
                throw "color component not a number";
            else if ((r < 0) || (g < 0) || (b < 0) || (a < 0))
                throw "color component less than 0";
            else if ((r > 255) || (g > 255) || (b > 255) || (a > 255))
                throw "color component bigger than 255";
            else {
                this.r = Math.round(r);
                this.g = Math.round(g);
                this.b = Math.round(b);
                this.a = Math.round(a);
            }
        } // end throw

        catch (e) {
            console.log(e);
        }
    } // end Color change method
} // end color class


/* utility functions */

// draw a pixel at x,y using color
function drawPixel(imagedata, x, y, color) {
    try {
        if ((typeof (x) !== "number") || (typeof (y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x < 0) || (y < 0) || (x >= imagedata.width) || (y >= imagedata.height))
            throw `drawpixel location outside of image (${x}, ${y})`;
        else if (color instanceof Color) {
            var pixelindex = (y * imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex + 1] = color.g;
            imagedata.data[pixelindex + 2] = color.b;
            imagedata.data[pixelindex + 3] = color.a;
        } else
            throw "drawpixel color is not a Color";
    } // end try

    catch (e) {
        console.log(e);
    }
} // end drawPixel

// get the input ellipsoids from the standard class URL
function getInputEllipsoids() {
    const INPUT_ELLIPSOIDS_URL =
        "/ellipsoids.json";

    // load the ellipsoids file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET", INPUT_ELLIPSOIDS_URL, false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now() - startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log * ("Unable to open input ellipses file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response);
} // end get input ellipsoids

// get the input lights from the standard class URL
function getInputLights() {
    const INPUT_LIGHTS_URL =
        "/lights.json";

    // load the ellipsoids file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET", INPUT_LIGHTS_URL, false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now() - startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log * ("Unable to open input lights file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response);
} // end get input lights

//get the input triangles from the standard class URL
function getInputTriangles() {
    const INPUT_TRIANGLES_URL =
        "/triangles2.json";

    // load the triangles file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET", INPUT_TRIANGLES_URL, false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now() - startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log * ("Unable to open input triangles file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response);
} // end get input triangles

//get the input boxex from the standard class URL
function getInputBoxes() {
    const INPUT_BOXES_URL =
        "/boxes.json";

    // load the boxes file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET", INPUT_BOXES_URL, false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now() - startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log * ("Unable to open input boxes file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response);
} // end get input boxes

class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static add(A = new Vec3(0, 0, 0), B = new Vec3(0, 0, 0)) {
        return new Vec3(A.x + B.x, A.y + B.y, A.z + B.z);
    }

    static subtract(A = new Vec3(0, 0, 0), B = new Vec3(0, 0, 0)) {
        return new Vec3(A.x - B.x, A.y - B.y, A.z - B.z);
    }

    static dot(A = new Vec3(0, 0, 0), B = new Vec3(0, 0, 0)) {
        return (A.x * B.x) + (A.y * B.y) + (A.z * B.z);
    }

    static cross(A = new Vec3(0, 0, 0), B = new Vec3(0, 0, 0)) {
        return new Vec3(A.y * B.z - B.y * A.z, A.z * B.x - B.z * A.x, A.x * B.y - B.x - A.y);
    }

    static multiply(A = new Vec3(1, 2, 3), B = new Vec3(1, 1, 1)) {
        return new Vec3(A.x * B.x, A.y * B.y, A.z * B.z);
    }

    static divide(A = new Vec3(1, 2, 3), B = new Vec3(1, 1, 1)) {
        return new Vec3(A.x / B.x, A.y / B.y, A.z / B.z);
    }

    static scale(A = new Vec3(0, 0, 0), s = 1) {
        return new Vec3(A.x * s, A.y * s, A.z * s);
    }

    static normalize(A = new Vec3(1, 1, 1)) {
        return Vec3.scale(A, 1 / this.distance(A));
    }

    static distance(A = new Vec3(1, 1, 1), B = new Vec3(0, 0, 0)) {
        return Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2 + (B.z - A.z) ** 2);
    }

    static copy(A = new Vec3(1, 1, 1)) {
        return new Vec3(A.x, A.y, A.z);
    }

    static toArray(A = new Vec3(1, 1, 1)) {
        return [A.x, A.y, A.z];
    }

    add(B = new Vec3(0, 0, 0)) {
        return new Vec3(this.x + B.x, this.y + B.y, this.z + B.z);
    }

    subtract(B = new Vec3(0, 0, 0)) {
        return new Vec3(this.x - B.x, this.y - B.y, this.z - B.z);
    }

    dot(B = new Vec3(0, 0, 0)) {
        return (this.x * B.x) + (this.y * B.y) + (this.z * B.z);
    }

    cross(B = new Vec3(0, 0, 0)) {
        return new Vec3(this.y * B.z - B.y * this.z, this.z * B.x - B.z * this.x, this.x * B.y - B.x - this.y);
    }

    multiply(B = new Vec3(1, 1, 1)) {
        return new Vec3(this.x * B.x, this.y * B.y, this.z * B.z);
    }

    divide(B = new Vec3(1, 1, 1)) {
        return new Vec3(this.x / B.x, this.y / B.y, this.z / B.z);
    }

    scale(s = 1) {
        return new Vec3(this.x * s, this.y * s, this.z * s);
    }

    normalize() {
        return this.scale(1 / this.distance(this));
    }

    distance(B = new Vec3(0, 0, 0)) {
        return Math.sqrt((B.x - this.x) ** 2 + (B.y - this.y) ** 2 + (B.z - this.z) ** 2);
    }

    copy() {
        return new Vec3(this.x, this.y, this.z);
    }

    toArray() {
        return [this.x, this.y, this.z];
    }
}

class Mat4 {
    constructor(M = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]) {
        if (M.length !== 4 || M.find(row => row.length !== 4) || M.find(row => row.find(i => i.constructor !== Number))) {
            throw "Mat4: invalid input";
        }

        this.M = M;
    }

}

class View {
    constructor(
        eyePosition = new Vec3(0.5, 0.5, -0.5),
        gazeDirection = new Vec3(0, 0, 1),
        viewUp = new Vec3(0, 1, 0),
        viewport = {width: 512, height: 512},
        viewPlaneDistance = 1,
        viewVolume = new Vec3(1, 1, Infinity),
        // fov = Math.PI/2,       // radians
        // aspectRatio = 1,       // square
        {context}
    ) {
        this.eyePosition = eyePosition;
        this.gazeDirection = Vec3.normalize(gazeDirection);
        this.viewUp = Vec3.normalize(viewUp);
        this.viewport = viewport;
        this.viewPlaneDistance = viewPlaneDistance;
        this.viewVolume = viewVolume;
        // this.fov = fov;
        // this.aspectRatio = aspectRatio;
        this.context = context;

        // const M = new Mat4([
        //     [2 * Math.abs(viewPlaneDistance), 0, 2 * Vec3.add(eyePosition, Vec3.scale(gazeDirection, viewPlaneDistance)).x / viewVolume.x, 0],
        //     [0, 2 * Math.abs(viewPlaneDistance), 2 * Vec3.add(eyePosition, Vec3.scale(gazeDirection, viewPlaneDistance)).y / viewVolume.y, 0],
        //     [0, 0, 2 * Math.abs(viewPlaneDistance) + Math.abs(viewVolume.z) / viewVolume.z, Math.abs(viewPlaneDistance) * (Math.abs(viewPlaneDistance) + Math.abs(viewVolume.z)) / viewVolume.z],
        //     [0, 0, -1, 0]
        // ])

        // add all non-light sources
        this.allSceneObjects = [];
        // Ellipsoids
        getInputEllipsoids().forEach(input => {
            this.allSceneObjects.push(new Ellipsoid(
                new Vec3(input.x, input.y, input.z),
                new Vec3(0, 0, 0),
                {
                    ambient: new Vec3(...(input.ambient)),
                    diffuse: new Vec3(...(input.diffuse)),
                    specular: new Vec3(...(input.specular)),
                    n: input.n
                },
                new Vec3(input.a, input.b, input.c)
            ))
        })
        // Triangles
        // getInputTriangles().forEach(inputSet => {
        //     inputSet.triangles.forEach(vertexSet => {
        //         this.allSceneObjects.push(new Triangle(
        //             new Vec3(
        //                 ...vertexSet.reduce((accum, curr) => {
        //                     accum[0] += inputSet.vertices[curr][0]/3;
        //                     accum[1] += inputSet.vertices[curr][1]/3;
        //                     accum[2] += inputSet.vertices[curr][2]/3;
        //                     return accum;
        //                 }, [0,0,0])
        //             ),
        //             new Vec3(0, 0, 0),
        //             {
        //                 ambient: new Vec3(...(inputSet.material.ambient)),
        //                 diffuse: new Vec3(...(inputSet.material.diffuse)),
        //                 specular: new Vec3(...(inputSet.material.specular)),
        //                 n: inputSet.material.n
        //             },
        //             {
        //                 A: new Vec3(...inputSet.vertices[vertexSet[0]]),
        //                 B: new Vec3(...inputSet.vertices[vertexSet[1]]),
        //                 C: new Vec3(...inputSet.vertices[vertexSet[2]]),
        //             }
        //         ))
        //     })
        // })

        // add light-sources
        this.lightSources = [];
        getInputLights().forEach(input => {
            const inputObj = new LightSource(
                new Vec3(input.x, input.y, input.z),
                new Vec3(0, 0, 0),
                {
                    ambient: new Vec3(...(input.ambient)),
                    diffuse: new Vec3(...(input.diffuse)),
                    specular: new Vec3(...(input.specular)),
                    n: input.n
                },
                0.5
            )
            this.allSceneObjects.push(inputObj)
            this.lightSources.push(inputObj)
        })

        // Curvilinear
        // const hrztViewHalfAngle = Math.atan(this.viewVolume.x/(2*this.viewPlaneDistance));
        // const vertViewHalfAngle = Math.atan(this.viewVolume.y/(2*this.viewPlaneDistance));
        // this.viewPlaneRight = Vec3.multiply(Vec3.cross(gazeDirection, Vec3.normalize(this.viewUp)), new Vec3(this.viewPlaneDistance*Math.sin(hrztViewHalfAngle), 1, this.viewPlaneDistance*Math.cos(hrztViewHalfAngle)).scale(-1))
        // this.viewPlaneDown = Vec3.multiply(this.viewUp, new Vec3(1, this.viewPlaneDistance*Math.sin(vertViewHalfAngle), this.viewPlaneDistance*Math.cos(vertViewHalfAngle)).scale(-1))

        // Rectilinear
        this.viewPlaneRight = Vec3.scale(Vec3.cross(gazeDirection, Vec3.normalize(this.viewUp)), -viewVolume.x / viewport.width)
        this.viewPlaneDown = Vec3.scale(this.viewUp, -viewVolume.y / viewport.height)

        this.viewPlaneCenterPosition = Vec3.add(eyePosition, Vec3.scale(gazeDirection, this.viewPlaneDistance))
        this.viewPlaneTopLeftPosition = Vec3.add(Vec3.add(this.viewPlaneCenterPosition, Vec3.scale(this.viewPlaneRight, -viewport.width / 2)), Vec3.scale(this.viewPlaneDown, -viewport.height / 2))

    }

    renderView() {
        let c = new Color(0, 0, 0, 255); // the color at the pixel: black
        const w = this.context.canvas.width;
        const h = this.context.canvas.height;
        const imagedata = this.context.createImageData(w, h);
        for (let j = 0; j < this.viewport.height; j++) {
            const viewLineLeft = Vec3.add(this.viewPlaneTopLeftPosition, Vec3.scale(this.viewPlaneDown, j + 0.5))
            for (let i = 0; i < this.viewport.width; i++) {
                const pixelPosition = Vec3.add(viewLineLeft, Vec3.scale(this.viewPlaneRight, i + 0.5))
                const rayDirection = Vec3.subtract(pixelPosition, this.eyePosition)

                let min_intersection = Infinity
                let pixelColor = c;

                this.allSceneObjects.forEach(so => {
                    const t = so.getIntersection(this.eyePosition, rayDirection)
                    // check if nearest intersection is behind viewPlane
                    if (t >= 1) {
                        if (min_intersection > t) {
                            min_intersection = t

                            if (so.constructor === LightSource) {
                                // Skip shading for LightSource
                                pixelColor = new Color(so.matrlProps.diffuse.x * 255, so.matrlProps.diffuse.y * 255, so.matrlProps.diffuse.z * 255, 255)
                            } else {
                                // Shading
                                const intersectionPoint = Vec3.add(this.eyePosition, Vec3.scale(rayDirection, t))
                                const normalVec = Vec3.normalize(Vec3.divide(Vec3.scale(Vec3.subtract(intersectionPoint, so.position), 2), Vec3.multiply(so.radii, so.radii)))
                                let tempColorVec = new Vec3(0, 0, 0)
                                const combinedMatrlProps = {
                                    ambient: new Vec3(0, 0, 0),
                                    diffuse: new Vec3(0, 0, 0),
                                    specular: new Vec3(0, 0, 0)
                                }
                                this.lightSources.forEach(ls => {
                                    const lightVec = Vec3.normalize(Vec3.subtract(ls.position, intersectionPoint))
                                    const NL = Vec3.dot(normalVec, lightVec)
                                    combinedMatrlProps.ambient = combinedMatrlProps.ambient.add(ls.matrlProps.ambient)
                                    if (NL <= 0) {
                                        return;
                                    }
                                    const reflectionVec = Vec3.subtract(Vec3.scale(normalVec, 2 * NL), lightVec)
                                    const RN = Vec3.dot(reflectionVec, normalVec)
                                    const EL = Vec3.subtract(lightVec, this.gazeDirection)
                                    const highlightVec = Vec3.normalize(Vec3.scale(EL, Vec3.distance(EL)))
                                    const HN = Vec3.dot(reflectionVec, normalVec)

                                    combinedMatrlProps.diffuse = combinedMatrlProps.diffuse.add(ls.matrlProps.diffuse.scale(NL))
                                    combinedMatrlProps.specular = combinedMatrlProps.specular.add(ls.matrlProps.specular.scale(Math.max(0, RN) ** so.matrlProps.n))
                                })

                                tempColorVec = tempColorVec.add(so.matrlProps.ambient.multiply(combinedMatrlProps.ambient))        // ambient
                                tempColorVec = tempColorVec.add(so.matrlProps.diffuse.multiply(combinedMatrlProps.diffuse))        // diffuse
                                tempColorVec = tempColorVec.add(so.matrlProps.specular.multiply(combinedMatrlProps.specular))      // specular

                                // ensure 0-1 range of color
                                tempColorVec.x = Math.min(Math.max(so.matrlProps.ambient.x * combinedMatrlProps.ambient.x, tempColorVec.x), 1)
                                tempColorVec.y = Math.min(Math.max(so.matrlProps.ambient.y * combinedMatrlProps.ambient.y, tempColorVec.y), 1)
                                tempColorVec.z = Math.min(Math.max(so.matrlProps.ambient.z * combinedMatrlProps.ambient.z, tempColorVec.z), 1)

                                // change pixel color
                                pixelColor = new Color(tempColorVec.x * 255, tempColorVec.y * 255, tempColorVec.z * 255, 255)
                            }
                        }
                    }

                    drawPixel(imagedata, i, j, pixelColor)

                })
            }
        }

        this.context.putImageData(imagedata, 0, 0);
    }
}

class SceneObject {
    constructor(
        position = new Vec3(0, 0, 0),
        rotation = new Vec3(0, 0, 0),
        matrlProps = {
            ambient: new Vec3(0.25, 0.25, 0.25),
            diffuse: new Vec3(0.5, 0.5, 0.5),
            specular: new Vec3(0.3, 0.3, 0.3),
            n: 5
        },
    ) {
        this.position = position;       // Cartesian
        this.rotation = rotation;       // Radians
        this.matrlProps = matrlProps;
    }

    getIntersection(eyePosition = new Vec3(0, 0, 0), rayDirection = new Vec3(1, 1, 1)) {
        if (true) {
            throw "getIntersection: Unimplemented function"
        }
    }
}

class Ellipsoid extends SceneObject {
    constructor(
        position = new Vec3(0, 0, 0),
        rotation = new Vec3(0, 0, 0),
        matrlProps = {
            ambient: new Vec3(0.25, 0.25, 0.25),
            diffuse: new Vec3(0.5, 0.5, 0.5),
            specular: new Vec3(0.3, 0.3, 0.3),
            n: 5
        },
        radii = new Vec3(1, 2, 3)
    ) {
        super(position, rotation, matrlProps);
        this.radii = radii;
    }

    getIntersection(eyePosition = new Vec3(0, 0, 0), rayDirection = new Vec3(1, 1, 1)) {
        const DA = Vec3.divide(rayDirection, this.radii);
        const ECA = Vec3.divide(Vec3.subtract(eyePosition, this.position), this.radii);
        const a = Vec3.dot(DA, DA);
        const b = 2 * Vec3.dot(DA, ECA);
        const c = Vec3.dot(ECA, ECA) - 1;

        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            return 0;
        } else if (discriminant === 0) {
            return -b / (2 * a);
        } else {
            const temp = Math.sqrt(discriminant);
            return Math.min((-b + temp) / (2 * a), (-b - temp) / (2 * a));
        }
    }
}

class Triangle extends SceneObject {
    constructor(
        position = new Vec3(0, 0, 0),
        rotation = new Vec3(0, 0, 0),
        matrlProps = {
            ambient: new Vec3(0.25, 0.25, 0.25),
            diffuse: new Vec3(0.5, 0.5, 0.5),
            specular: new Vec3(0.3, 0.3, 0.3),
            n: 5
        },
        vertices = {
            A: new Vec3(1, 2, 3),
            B: new Vec3(1, 2, 3),
            C: new Vec3(1, 2, 3)
        }
    ) {
        super(position, rotation, matrlProps);
        this.vertices = vertices;
        this.normalVec = Vec3.cross(Vec3.subtract(this.vertices.A, this.vertices.B), Vec3.subtract(this.vertices.A, this.vertices.C));
        this.planeConstant = this.normalVec.dot(this.vertices.A);
    }

    intersectionInteriority(intersectionPoint = this.vertices.A) {
        const sum =
            Math.sign(this.normalVec.dot(Vec3.cross(intersectionPoint.subtract(this.vertices.A), this.vertices.B.subtract(this.vertices.A)))) +
            Math.sign(this.normalVec.dot(Vec3.cross(intersectionPoint.subtract(this.vertices.B), this.vertices.C.subtract(this.vertices.B)))) +
            Math.sign(this.normalVec.dot(Vec3.cross(intersectionPoint.subtract(this.vertices.C), this.vertices.A.subtract(this.vertices.C))));

        return Math.abs(sum) >= 2;
    }

    getIntersection(eyePosition = new Vec3(0, 0, 0), rayDirection = new Vec3(1, 1, 1)) {
        if (this.normalVec.dot(rayDirection) === 0) {
            return 0;
        }

        const t = (this.planeConstant - this.normalVec.dot(eyePosition)) / (this.normalVec.dot(rayDirection));
        if (t < 1) {
            return 0;
        }

        return this.intersectionInteriority(eyePosition.add(rayDirection.scale(t))) ? t : 0
    }
}

class Box extends SceneObject {
    constructor(
        position = new Vec3(0, 0, 0),
        rotation = new Vec3(0, 0, 0),
        matrlProps = {
            ambient: new Vec3(0.25, 0.25, 0.25),
            diffuse: new Vec3(0.5, 0.5, 0.5),
            specular: new Vec3(0.3, 0.3, 0.3),
            n: 5
        },
        dimensions = new Vec3(1, 2, 3)
    ) {
        super(position, rotation, matrlProps);
        this.dimensions = dimensions;
    }

    getIntersection(eyePosition = new Vec3(0, 0, 0), rayDirection = new Vec3(1, 1, 1)) {
        const DA = Vec3.divide(rayDirection, this.radii);
        const ECA = Vec3.divide(Vec3.subtract(eyePosition, this.position), this.radii);
        const a = Vec3.dot(DA, DA);
        const b = 2 * Vec3.dot(DA, ECA);
        const c = Vec3.dot(ECA, ECA) - 1;

        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            return 0;
        } else if (discriminant === 0) {
            return -b / (2 * a);
        } else {
            const temp = Math.sqrt(discriminant);
            return Math.min((-b + temp) / (2 * a), (-b - temp) / (2 * a));
        }
    }
}

class LightSource extends SceneObject {
    constructor(
        position = new Vec3(0, 0, 0),
        rotation = new Vec3(0, 0, 0),
        matrlProps = {
            ambient: new Vec3(0.25, 0.25, 0.25),
            diffuse: new Vec3(0.5, 0.5, 0.5),
            specular: new Vec3(0.3, 0.3, 0.3),
            n: 5
        },
        radius = 1
    ) {
        super(position, rotation, matrlProps);
        this.radius = radius;
    }

    getIntersection(eyePosition = new Vec3(0, 0, 0), rayDirection = new Vec3(1, 1, 1)) {
        const DA = Vec3.scale(rayDirection, 1 / this.radius);
        const ECA = Vec3.scale(Vec3.subtract(eyePosition, this.position), 1 / this.radius);
        const a = Vec3.dot(DA, DA);
        const b = 2 * Vec3.dot(DA, ECA);
        const c = Vec3.dot(ECA, ECA) - 1;

        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            return 0;
        } else if (discriminant === 0) {
            return -b / (2 * a);
        } else {
            const temp = Math.sqrt(discriminant);
            return Math.min((-b + temp) / (2 * a), (-b - temp) / (2 * a));
        }
    }
}

/* main -- here is where execution begins after window load */

function main() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");

    const eyePosition = new Vec3(0.5, 0.5, -0.5)
    const gazeDirection = new Vec3(0, 0, 1)
    const viewUp = new Vec3(0, 1, 0)
    const viewport = {width: context.canvas.width, height: context.canvas.height}
    const viewPlaneDistance = 0.5
    const viewVolume = new Vec3(1, 1, Infinity)
    const view = new View(eyePosition, gazeDirection, viewUp, viewport, viewPlaneDistance, viewVolume, {context})

    view.renderView()

    // Create the image
    // drawRandPixels(context);
    // shows how to draw pixels

    // drawRandPixelsInInputEllipsoids(context);
    // shows how to draw pixels and read input file

    // drawInputEllipsoidsUsingArcs(context);
    // shows how to read input file, but not how to draw pixels

    //drawRandPixelsInInputTriangles(context);
    // shows how to draw pixels and read input file

    //drawInputTrainglesUsingPaths(context);
    // shows how to read input file, but not how to draw pixels

    //drawRandPixelsInInputBoxes(context);
    // shows how to draw pixels and read input file

    //drawInputBoxesUsingPaths(context);
    // shows how to read input file, but not how to draw pixels
}

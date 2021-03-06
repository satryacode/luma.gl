// Export core modules for luma.gl

// Initialize any global state
require('./init');

// WebGL
export {default as GL} from './webgl/gl-constants';
export {
  isWebGLContext,
  isWebGL2Context} from './webgl/context';

export {
  createGLContext,
  getGLExtension,
  glContextWithState,
  glGetDebugInfo} from './webgl/context';
export {
  getGLParameter,
  setGLParameter,
  withGLState} from './webgl/context-state';
export {
  getGLContextInfo,
  getContextLimits} from './webgl/context-limits';

export {default as Buffer} from './webgl/buffer';
export {default as Shader, VertexShader, FragmentShader} from './webgl/shader';
export {default as Program} from './webgl/program';
export {default as Framebuffer} from './webgl/framebuffer';
export {default as Renderbuffer} from './webgl/renderbuffer';
export {default as Texture2D} from './webgl/texture-2d';
export {default as TextureCube} from './webgl/texture-cube';

export {
  draw} from './webgl/draw';
export {
  clear,
  readPixels} from './webgl/functions';

// WebGL2 & Extensions
export {default as FenceSync} from './webgl/fence-sync';
export {default as Query} from './webgl/query';
export {default as Sampler} from './webgl/sampler';
export {default as Texture3D} from './webgl/texture-3d';
export {default as Texture2DArray} from './webgl/texture-2d-array';
export {default as TransformFeedback} from './webgl/transform-feedback';
export {default as VertexArrayObject} from './webgl/vertex-array-object';

// Core Classes
export {default as Model} from './core/model';
export {default as AnimationLoop} from './core/animation-loop';

// Addons
export {addEvents} from './packages/events';

// Geometry
export {default as Geometry} from './geometry/geometry';
export {default as ConeGeometry} from './geometry/cone-geometry';
export {default as CubeGeometry} from './geometry/cube-geometry';
export {default as CylinderGeometry} from './geometry/cylinder-geometry';
export {default as IcoSphereGeometry} from './geometry/ico-sphere-geometry';
export {default as PlaneGeometry} from './geometry/plane-geometry';
export {default as SphereGeometry} from './geometry/sphere-geometry';
export {default as TruncatedConeGeometry} from './geometry/truncated-cone-geometry';

// Models
export {default as Cone} from './models/cone';
export {default as Cube} from './models/cube';
export {default as Cylinder} from './models/cylinder';
export {default as IcoSphere} from './models/ico-sphere';
export {default as Plane} from './models/plane';
export {default as Sphere} from './models/sphere';
export {default as TruncatedCone} from './models/truncated-cone';

export {default as ClipSpaceQuad} from './models/clip-space-quad';

// Math
export {
  radians,
  degrees} from './packages/math/src/common';
export {default as Vector2} from './packages/math/src/vector2';
export {default as Vector3} from './packages/math/src/vector3';
export {default as Vector4} from './packages/math/src/vector4';
export {default as Matrix4} from './packages/math/src/matrix4';
export {default as Quaternion} from './packages/math/src/quaternion';
export {default as Euler} from './packages/math/src/euler';

// IO
export {
  loadFile,
  loadImage,
  loadFiles,
  loadImages,
  loadTextures,
  loadProgram,
  loadModel,
  parseModel
} from './io';

// EXPERIMENTAL MODULES

// Shader Tools
import {
  registerShaderModules,
  assembleShaders,
  ShaderCache
} from './experimental/shader-tools';

// Register Shader Modules
import './experimental/shader-modules';

export const experimental = {
  registerShaderModules,
  assembleShaders,
  ShaderCache
};

// Alias for FramebufferObject (deprecated in v3). Framebuffer API is fairly similar
export {default as FramebufferObject} from './webgl/framebuffer';

// DEPRECATED IN V3.0
export {Object3D, Group, Scene, pickModels} from './deprecated/scenegraph';
export {default as Shaders} from './deprecated/shaderlib';
export {default as Fx} from './deprecated/fx';

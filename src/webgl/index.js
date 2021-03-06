// luma.gl Base WebGL wrapper library
// Provides simple class/function wrappers around the low level webgl objects
// These classes are intentionally close to the WebGL API
// but make it easier to use.
// Higher level abstractions can be built on these classes

// Exports WebGL API constants and types, plus some basic type checks
export {
  Image,
  WebGLRenderingContext,
  WebGLProgram,
  WebGLShader,
  WebGLBuffer,
  WebGLFramebuffer,
  WebGLRenderbuffer,
  WebGLTexture,
  WebGLUniformLocation,
  WebGLActiveInfo,
  WebGLShaderPrecisionFormat,
  WebGL2RenderingContext,

  webGLTypesAvailable
} from './api/webgl-types';

export {GL} from './gl-constants';
export {GL as default} from './gl-constants';

export {
  isWebGLContext,
  isWebGL2Context
} from './context';

// WebGL context functions and helpers
export * from './context';

// WebGL1 objects
export {default as Buffer} from './buffer';
export {default as Shader, VertexShader, FragmentShader} from './shader';
export {default as Program} from './program';
export {default as Framebuffer} from './framebuffer';
export {default as Renderbuffer} from './renderbuffer';
export {default as Texture2D} from './texture-2d';
export {default as TextureCube} from './texture-cube';

import * as VertexAttributes from './vertex-attributes';
export {VertexAttributes};

// Functions
export {
  draw
} from './draw';

export {
  clear,
  readPixels,
  readPixelsFromBuffer
} from './functions';

export {
  parseUniformName,
  getUniformSetter,
  checkUniformValues
} from './uniforms';

// WebGL2
export {default as VertexArrayObject} from './vertex-array-object';

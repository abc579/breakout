#version 330 core

layout(location = 0) in vec4 vertex;

out vec2 texCoords;

uniform mat4 projection;

void main()
{
    texCoords = vertex.zw;
    gl_Position = projection * vec4(vertex.xy, 0.f, 1.f);
}

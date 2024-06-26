#version 330 core

out vec4 colour;

in vec2 texCoords;

uniform sampler2D image;
uniform vec3 textColour;

void main()
{
    vec4 sampled = vec4(1.f, 1.f, 1.f, texture(image, texCoords).r);
    colour = sampled * vec4(textColour, 1.f);
}

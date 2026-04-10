#!/bin/bash

# Usage: ./create-content.sh <content-type> <title>
# Example: ./create-content.sh blog "How Good at Coding Do You Need to Be to Vibe Code?"
# Example: ./create-content.sh presentation "Building AI Agents Workshop"

if [ $# -ne 2 ]; then
    echo "Usage: $0 <content-type> \"<title>\""
    echo "Content types: blog, podcast, presentation"
    echo "Example: $0 blog \"How Good at Coding Do You Need to Be to Vibe Code?\""
    exit 1
fi

CONTENT_TYPE=$1
TITLE=$2

# Valid content types (singular)
VALID_TYPES=("blog" "podcast" "presentation")

# Check if content type is valid
if [[ ! " ${VALID_TYPES[@]} " =~ " ${CONTENT_TYPE} " ]]; then
    echo "Error: Invalid content type '$CONTENT_TYPE'"
    echo "Valid types: ${VALID_TYPES[*]}"
    exit 1
fi

# Map singular content types to plural for directory/archetype names
case "$CONTENT_TYPE" in
    "presentation")
        CONTENT_TYPE_PLURAL="presentations"
        ;;
    *)
        CONTENT_TYPE_PLURAL="$CONTENT_TYPE"
        ;;
esac

# Convert title to filename-friendly format
FILENAME=$(echo "$TITLE" | \
    tr '[:upper:]' '[:lower:]' | \
    sed 's/[^a-z0-9]/-/g' | \
    sed 's/-\+/-/g' | \
    sed 's/^-*//g' | \
    sed 's/-*$//g')

# Ensure filename is not empty
if [ -z "$FILENAME" ]; then
    echo "Error: Could not generate valid filename from title '$TITLE'"
    exit 1
fi

echo "📝 Title: $TITLE"
echo "📄 Filename: $FILENAME"
echo ""

# Create temporary archetype with the actual title
TEMP_ARCHETYPE="archetypes/${CONTENT_TYPE_PLURAL}-temp.md"
ORIGINAL_ARCHETYPE="archetypes/${CONTENT_TYPE_PLURAL}.md"

# Create temporary archetype with the actual title
cp "$ORIGINAL_ARCHETYPE" "$TEMP_ARCHETYPE"

# Replace the title template with the actual title
case "$CONTENT_TYPE" in
    "blog"|"presentation")
        sed -i.bak "s/title = \"{{ replace .Name \"-\" \" \" | title }}\"/title = \"$TITLE\"/" "$TEMP_ARCHETYPE"
        ;;
    "podcast")
        sed -i.bak "s/title = \"\"/title = \"$TITLE\"/" "$TEMP_ARCHETYPE"
        ;;
esac

# Create the Hugo content using the temporary archetype
echo "Creating Hugo content: ${CONTENT_TYPE_PLURAL}/$FILENAME.md"
hugo new content "${CONTENT_TYPE_PLURAL}/$FILENAME.md" -k "${CONTENT_TYPE_PLURAL}-temp"

# Clean up temporary files
rm "$TEMP_ARCHETYPE" "${TEMP_ARCHETYPE}.bak" 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Error: Failed to create Hugo content"
    exit 1
fi

# Create SEO directory if it doesn't exist
SEO_DIR="data/seo/content-types/${CONTENT_TYPE_PLURAL}/entries"
mkdir -p "$SEO_DIR"

# Create SEO YAML file
SEO_FILE="$SEO_DIR/$FILENAME.yaml"
echo "Creating SEO file: $SEO_FILE"

cat > "$SEO_FILE" << EOF
# Basic SEO - Custom content for this $CONTENT_TYPE
title: "$TITLE | iBuildWith.ai"
description: "[Add description here]"
author: "defaults.author"

# Social Media - Use default image with custom alt text
social_image: "defaults.social_image"
social_image_alt: "$TITLE | iBuildWith.ai"
twitter_card_type: "defaults.twitter_card_type"
twitter_site: "defaults.twitter_site"
twitter_creator: "defaults.twitter_creator"

# Open Graph Image Properties - inherit from defaults
og_image_width: "defaults.og_image_width"
og_image_height: "defaults.og_image_height"
og_image_type: "defaults.og_image_type"

# Technical SEO - inherit from defaults
robots: "defaults.robots"
canonical_base_url: "defaults.canonical_base_url"

# Language/Locale - inherit from defaults
language: "defaults.language"
locale: "defaults.locale"
EOF

echo ""
echo "✅ Successfully created:"
echo "  📝 Content: content/${CONTENT_TYPE_PLURAL}/$FILENAME.md"
echo "  🔍 SEO: $SEO_FILE"
echo ""
echo "Next steps:"
echo "  1. Edit the content file to add your content"
echo "  2. Update the description in the SEO file"
echo "  3. Set draft=false when ready to publish"
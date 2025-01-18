import { getColors } from "@/lib/colors"
import { ColorPalette } from "@/components/global/color-palette"

export default function ColorsPage() {
  const colors = getColors()

  return (
    <div className="grid gap-8">
      {colors.map((colorPalette) => (
        <ColorPalette key={colorPalette.name} colorPalette={colorPalette} />
      ))}
    </div>
  )
}
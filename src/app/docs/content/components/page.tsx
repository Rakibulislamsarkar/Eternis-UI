import ComponentLayout from "@/components/website/layout"

export default function ComponentsPage() {
  return (
    <ComponentLayout
      title="Components"
      description="Browse through our collection of reusable components."
      component={
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Component Preview</h2>
          <p>Select a component from the sidebar to view its details</p>
        </div>
      }
      code={`// Component code will appear here when selected`}
    />
  )
}


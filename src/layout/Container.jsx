
export const Container = ( { children } ) => {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        { children }
    </div>
  )
}

export const FullWidthContainer = ( { children } ) => {
    return (
    <section className="w-full py-16  bg-purple-600">
        { children }
    </section>
    )
}

export const FullWidthInnerContainer = ( { children } ) => {
    return (
    <FullWidthContainer>
        <Container>
            { children }
        </Container>
    </FullWidthContainer>
    )
}

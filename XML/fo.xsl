<?xml version="1.0" encoding="utf-8"?>

<!--Configuración de hoja de estilo-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

    <!--Plantilla que se aplicara generalmente-->
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/rss/channel">

        <!--Plantilla que se aplicara generalmente-->
        <fo:root>

            <!-- Definimos el conjunto de diseños maestro de página -->
            <fo:layout-master-set>

                <!-- Con el diseño maestro fifamos el tamaño y los margenes -->
                <fo:simple-page-master master-name="FO" page-height="29.7cm" page-width="21.0cm" margin="2cm">

                    <!-- Definimos una región en el diseño maestro de página que contendrá el contenido de la página -->
                    <fo:region-body/>

                </fo:simple-page-master>

            </fo:layout-master-set>

            <!-- Definimos una secuencia de página utilizando el diseño maestro de página -->
            <fo:page-sequence master-reference="FO">

                <!-- Definimos el área del diseño de página que contiene el contenido de la página -->
                <fo:flow flow-name="xsl-region-body">

                
                    <fo:block font-weight="bold" text-align="center" margin="5pt" font-family="Garamond" font-size="12px" color="#000000">
                        Trabajo para el caso PBL
                    </fo:block>

                  
                    <fo:block font-weight="bold" text-align="center" margin="5pt" font-family="Garamond" font-size="12px" color="#000000">
                        Sindicación de Contenidos con RSS
                    </fo:block>

                  
                    <fo:block font-weight="bold" text-align="center" margin="5pt" font-family="Garamond" font-size="12px" color="#000000">
                        Lenguajes de Marcas y Sistemas de Gestión de la Información
                    </fo:block>

                  
                    <fo:block font-weight="bold" text-align="center"
                              margin="5pt" font-family="Arial" text-decoration="underline" margin-top="20px" font-size="18px" color="#000000">
                        POOL DE NOTICIAS SINDICADAS
                    </fo:block>

                
                    <xsl:apply-templates select="item"/>

                 
                    <fo:block text-align="left" font-family="TimesNewRoman" font-size="12pt" font-weight="bold">
                        Componentes del grupo: Máximo Barcos Julián
                    </fo:block>

                   
                    <fo:block text-align="left" font-family="TimesNewRoman" font-size="12pt" font-weight="bold">
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Bernardo José Millano
                    </fo:block>

                    
                    <fo:block text-align="left" font-family="TimesNewRoman" font-size="12pt" font-weight="bold">
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Antonio José Maqueda
                    </fo:block>

                </fo:flow>

            </fo:page-sequence>

        </fo:root>


        <!-- Zona cuerpo -->
    </xsl:template>

    <xsl:template match="item">
        <fo:block border="solid black 1pt" padding="0.4cm" margin="0.7cm"
                  margin-bottom="1cm" margin-left="2.5cm" margin-right="2.5cm">

            <fo:block >
                <fo:external-graphic src="{enclosure/@url}" content-width="50px" content-height="50px" margin-bottom="0.5cm"/>
            </fo:block>

            <fo:block font-weight="bold" font-size="12px" font-family="Trebuchet"  text-align="justify" margin-top="0.5cm" margin-bottom="0.5cm">
                <xsl:value-of select="section" >
                </xsl:value-of>  <xsl:text >&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</xsl:text>
                <xsl:value-of select="pubDate"/>
            </fo:block>

            <fo:block margin-bottom="0.5cm" margin-top="0.5cm">
                <xsl:value-of select="title"/>
                (<xsl:value-of select="author"/>)
            </fo:block>
            <fo:block margin-top="0.5cm">
                <xsl:value-of select="link"/>
            </fo:block>

        </fo:block>
    </xsl:template>

</xsl:stylesheet>
(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("fbdea0d8-6f40-4ad3-9e42-dbeca23851e8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fbdea0d8-6f40-4ad3-9e42-dbeca23851e8' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"593e540b-fb33-4b1d-98b0-29f13d947d88":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17817","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17840"},"glyph":{"id":"17841"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"17843"},"nonselection_glyph":{"id":"17842"},"view":{"id":"17845"}},"id":"17844","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"17862"},"selection_policy":{"id":"17861"}},"id":"17833","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17833"}},"id":"17838","type":"CDSView"},{"attributes":{"toolbar":{"id":"17871"},"toolbar_location":"above"},"id":"17872","type":"ToolbarBox"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","x":{"field":"x"},"y":{"field":"y"}},"id":"17835","type":"Line"},{"attributes":{},"id":"17856","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","x":{"field":"x"},"y":{"field":"y"}},"id":"17836","type":"Line"},{"attributes":{},"id":"17814","type":"ResetTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17859"},"group":null,"major_label_policy":{"id":"17860"},"ticker":{"id":"17807"}},"id":"17806","type":"LinearAxis"},{"attributes":{},"id":"17861","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17822"}},"id":"17816","type":"BoxZoomTool"},{"attributes":{},"id":"17802","type":"LinearScale"},{"attributes":{},"id":"17863","type":"UnionRenderers"},{"attributes":{},"id":"17804","type":"LinearScale"},{"attributes":{"bottom":1.459677659268402,"coordinates":null,"fill_alpha":0.1,"fill_color":"#2a2eec","group":null,"top":0.6850827603275131},"id":"17839","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"value":0},"y":{"value":0}},"id":"17848","type":"Line"},{"attributes":{},"id":"17807","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17821","type":"HoverTool"},{"attributes":{"below":[{"id":"17806"}],"center":[{"id":"17809"},{"id":"17813"},{"id":"17839"}],"height":500,"left":[{"id":"17810"}],"output_backend":"webgl","renderers":[{"id":"17837"},{"id":"17844"},{"id":"17850"}],"title":{"id":"17852"},"toolbar":{"id":"17824"},"toolbar_location":null,"width":500,"x_range":{"id":"17798"},"x_scale":{"id":"17802"},"y_range":{"id":"17800"},"y_scale":{"id":"17804"}},"id":"17797","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17857","type":"AllLabels"},{"attributes":{},"id":"17798","type":"DataRange1d"},{"attributes":{},"id":"17864","type":"Selection"},{"attributes":{"overlay":{"id":"17823"}},"id":"17818","type":"LassoSelectTool"},{"attributes":{"tools":[{"id":"17814"},{"id":"17815"},{"id":"17816"},{"id":"17817"},{"id":"17818"},{"id":"17819"},{"id":"17820"},{"id":"17821"}]},"id":"17824","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"y / y","text_font_size":"15pt"},"id":"17852","type":"Title"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17822","type":"BoxAnnotation"},{"attributes":{},"id":"17859","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17840"}},"id":"17845","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","x":{"field":"x"},"y":{"field":"y"}},"id":"17834","type":"Line"},{"attributes":{},"id":"17800","type":"DataRange1d"},{"attributes":{},"id":"17815","type":"PanTool"},{"attributes":{},"id":"17862","type":"Selection"},{"attributes":{},"id":"17811","type":"BasicTicker"},{"attributes":{"children":[[{"id":"17797"},0,0]]},"id":"17870","type":"GridBox"},{"attributes":{"axis":{"id":"17806"},"coordinates":null,"group":null,"ticker":null},"id":"17809","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17823","type":"PolyAnnotation"},{"attributes":{},"id":"17866","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"white","x":{"field":"x"},"y":{"field":"y"}},"id":"17843","type":"Line"},{"attributes":{},"id":"17819","type":"UndoTool"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"value":0},"y":{"value":0}},"id":"17849","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"17833"},"glyph":{"id":"17834"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"17836"},"nonselection_glyph":{"id":"17835"},"view":{"id":"17838"}},"id":"17837","type":"GlyphRenderer"},{"attributes":{},"id":"17860","type":"AllLabels"},{"attributes":{"line_color":"white","x":{"field":"x"},"y":{"field":"y"}},"id":"17841","type":"Line"},{"attributes":{"source":{"id":"17846"}},"id":"17851","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"white","x":{"field":"x"},"y":{"field":"y"}},"id":"17842","type":"Line"},{"attributes":{},"id":"17865","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"value":0},"y":{"value":0}},"id":"17847","type":"Line"},{"attributes":{},"id":"17820","type":"SaveTool"},{"attributes":{"axis":{"id":"17810"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17813","type":"Grid"},{"attributes":{"toolbars":[{"id":"17824"}],"tools":[{"id":"17814"},{"id":"17815"},{"id":"17816"},{"id":"17817"},{"id":"17818"},{"id":"17819"},{"id":"17820"},{"id":"17821"}]},"id":"17871","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"17846"},"glyph":{"id":"17847"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"17849"},"nonselection_glyph":{"id":"17848"},"view":{"id":"17851"}},"id":"17850","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"17872"},{"id":"17870"}]},"id":"17873","type":"Column"},{"attributes":{"data":{"x":[0,1],"y":[1,1]},"selected":{"id":"17864"},"selection_policy":{"id":"17863"}},"id":"17840","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"17856"},"group":null,"major_label_policy":{"id":"17857"},"ticker":{"id":"17811"}},"id":"17810","type":"LinearAxis"},{"attributes":{"data":{},"selected":{"id":"17866"},"selection_policy":{"id":"17865"}},"id":"17846","type":"ColumnDataSource"}],"root_ids":["17873"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"593e540b-fb33-4b1d-98b0-29f13d947d88","root_ids":["17873"],"roots":{"17873":"fbdea0d8-6f40-4ad3-9e42-dbeca23851e8"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();